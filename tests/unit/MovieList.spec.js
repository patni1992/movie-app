import MovieList from "@/views/MovieList.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("MovieList.vue", () => {
  it("should have a search input", () => {
    const wrapper = mount(MovieList, {
      localVue,
      stubs: { "app-spinner": true }
    });

    const input = wrapper.find("#search");

    expect(input.is("input")).toBe(true);
  });

  it("should show a loading spinner", () => {
    const wrapper = mount(MovieList, {
      localVue,
      stubs: { "app-spinner": true }
    });

    const spinner = wrapper.find("#spinner");

    expect(spinner.exists()).toBe(true);
  });
});
