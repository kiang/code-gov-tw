import {
  $,
  component$,
  useSignal,
  useStore,
  useComputed$,
  useOnDocument,
} from "@builder.io/qwik";
import Section from "~/components/section";
import { RepoBlock } from "~/routes/projects/repo-block";
import { PageNav } from "~/routes/projects/page-nav";
import FunnelIcon from "~/media/icons/funnel-icon.svg?jsx";
import Filter from "~/routes/projects/filter";
import localProjects from "~/data/projects.json";
import filters from "~/data/filters.json";
import type { Project } from "~/types/Project";
import {
  filterProjectsByFeatures,
  filterProjectsByRepoOwners,
  filterProjectsByTechStacks,
} from "~/routes/projects/filter-rules";

function paginateData(
  filteredData: Project[],
  pageNumber: number,
  itemsPerPage: number,
): Project[] {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredData.slice(startIndex, endIndex);
}

export default component$(() => {
  const itemsPerPage = 5;
  const currentPage = useSignal(1);
  const filter = useSignal(false);
  const store = useStore({
    projects: localProjects,
  });

  const projectListRef = useSignal<Element>();
  const spinnerController = useSignal("visible");

  const filterStore = useStore({
    features: [],
    repoOwners: [],
    techStacks: [],
  });

  const computedProjects = useComputed$(
    (): { data: Project[]; total: number } => {
      const filteredProjects = store.projects.filter((project) => {
        return (
          filterProjectsByFeatures(project, filterStore.features) &&
          filterProjectsByRepoOwners(project, filterStore.repoOwners) &&
          filterProjectsByTechStacks(project, filterStore.techStacks)
        );
      });
      return {
        data: paginateData(filteredProjects, currentPage.value, itemsPerPage),
        total: filteredProjects.length,
      };
    },
  );

  const handleMobileFilter = $((e: Event) => {
    filter.value = !filter.value;
    const target = e.target as HTMLElement;
    const targetSpinner = target.querySelector(".spinner-more");
    if (targetSpinner) targetSpinner.classList.toggle("hidden");
  });

  useOnDocument(
    "readystatechange",
    $(() => {
      // Options for the observer (which mutations to observe)
      const config = { childList: true, subtree: true };

      // Callback function to execute when mutations are observed
      const callback = (mutationList: string | any[]) => {
        if (mutationList.length > 0) {
          spinnerController.value = "hidden";

          window.scrollTo({ top: 0, behavior: "smooth" });
          document.querySelector("#spinner-next")?.classList.add("hidden");
          document.querySelector("#spinner-prev")?.classList.add("hidden");
          const spinners = document.querySelectorAll(".page-number > .spinner");
          for (const spinner of spinners) {
            spinner.classList.add("hidden");
          }

          // Reset current page if total items is less than items per page
          if (computedProjects.value.total < itemsPerPage) {
            currentPage.value = 1;
          } else if (
            currentPage.value * itemsPerPage >=
            computedProjects.value.total
          ) {
            currentPage.value = Math.ceil(
              computedProjects.value.total / itemsPerPage,
            );
          }
        }
      };
      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback);
      if (!projectListRef.value) return;
      observer.observe(projectListRef.value, config);
    }),
  );

  return (
    <>
      {!filter.value ? (
        <Section>
          <h1 class="text-primary">{$localize`公共程式專案一覽`}</h1>
          <div class="h2-sub mt-4">
            {$localize`公共程式由各政府單位提供，以下匯集國內外不同單位的公共程式。`}
          </div>
        </Section>
      ) : (
        <div class="sticky top-0 z-10 flex items-center justify-between bg-white p-6 md:hidden">
          <h3>{$localize`設定篩選條件`}</h3>
          <button
            class={[
              "flex items-center justify-center gap-4 rounded-md border border-primary bg-white px-3.5 py-2.5 text-base font-semibold text-primary shadow-sm",
              "hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
              "relative",
            ]}
            onClick$={handleMobileFilter}
          >
            {$localize`完成`}
            <span class="spinner-more pointer-events-none absolute hidden"></span>
          </button>
        </div>
      )}
      <Section class="bg-gray-100">
        <div class="flex flex-col gap-6 md:flex-row md:gap-20 xl:min-h-[50vh]">
          {!filter.value && (
            <button
              class={[
                "flex items-center justify-center gap-3 rounded-md border border-primary-700 bg-white px-3.5 py-2.5 text-base font-semibold text-primary-700 shadow-sm md:hidden",
                "hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
              ]}
              onClick$={handleMobileFilter}
            >
              {$localize`設定篩選條件`}
              <FunnelIcon
                q:slot="icon-right"
                class="h-5 w-5 text-primary-700"
              />
              <span class="spinner-more pointer-events-none absolute hidden"></span>
            </button>
          )}
          <div
            id="filter"
            class="hidden min-w-60 flex-shrink-0 flex-col gap-8 md:flex"
          >
            <Filter
              filterName="features"
              categoryName={$localize`功能類型`}
              filterOptions={filters.features}
              store={filterStore}
              spinnerController={spinnerController.value}
            />
            <Filter
              filterName="repoOwners"
              categoryName={$localize`提供單位`}
              filterOptions={filters.repoOwners}
              store={filterStore}
              spinnerController={spinnerController.value}
            />
            <Filter
              filterName="techStacks"
              categoryName={$localize`使用技術`}
              filterOptions={filters.techStacks}
              store={filterStore}
              spinnerController={spinnerController.value}
            />
          </div>
          {filter.value ? (
            <div
              id="filter"
              class="flex min-w-60 flex-shrink-0 flex-col gap-8 md:hidden"
            >
              <Filter
                filterName="features"
                categoryName={$localize`功能類型`}
                filterOptions={filters.features}
                store={filterStore}
                spinnerController={"hidden"}
              />
              <Filter
                filterName="repoOwners"
                categoryName={$localize`提供單位`}
                filterOptions={filters.repoOwners}
                store={filterStore}
                spinnerController={"hidden"}
              />
              <Filter
                filterName="techStacks"
                categoryName={$localize`使用技術`}
                filterOptions={filters.techStacks}
                store={filterStore}
                spinnerController={"hidden"}
              />
            </div>
          ) : (
            <div
              id="projects"
              class="flex w-full flex-col gap-8"
              ref={projectListRef}
            >
              {computedProjects.value.data.map((project) => {
                const projectName =
                  project.description["zh-Hant"].localisedName || project.name;
                const mainCopyrightOwner = project.legal.mainCopyrightOwner;
                const repoOwner = project.legal.repoOwner.split(" ")[0];
                const projectDescription =
                  project.description["zh-Hant"].shortDescription;
                const projectFeatures = project.description["zh-Hant"].features;
                const mainCopyrightOwnerLogo =
                  project.tw.mainCopyrightOwnerLogo;
                return (
                  <RepoBlock
                    id={project.id}
                    key={project.name}
                    name={projectName}
                    repoOwner={repoOwner}
                    mainCopyrightOwner={mainCopyrightOwner}
                    mainCopyrightOwnerLogo={mainCopyrightOwnerLogo}
                    shortDescription={projectDescription}
                    features={projectFeatures}
                    dependsOn={project.dependsOn?.open}
                    techStacks={project.tw.techStacks}
                  />
                );
              })}
              <PageNav
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={computedProjects.value.total}
              />
            </div>
          )}
        </div>
      </Section>
    </>
  );
});
