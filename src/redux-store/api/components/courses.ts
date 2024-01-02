import apiSlice from "../index";
import { getAccessToken } from "../../../utils/auth";
import {
  IChaptersResponse,
  ISubjectsResponse,
  ITopicsResponse,
} from "../../../types/api/response/courses";
import {
  IChaptersRequest,
  ISubjectsRequest,
  ITopicsRequest,
} from "../../../types/api/request/courses";

const coursesApis = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    courses: build.query({
      query: () => ({
        url: "/api/v1/courses.json",
        headers: {
          Authorization: getAccessToken() || "",
        },
      }),
    }),
    subjects: build.query<ISubjectsResponse, ISubjectsRequest>({
      query: (payload) => ({
        url: `/api/v1/courses/${payload.courseId}/subjects.json`,
        headers: {
          Authorization: getAccessToken() || "",
        },
      }),
    }),
    chapters: build.query<IChaptersResponse, IChaptersRequest>({
      query: (payload) => ({
        url: `/api/v1/subjects/${payload.subjectId}/chapters.json`,
        headers: {
          Authorization: getAccessToken() || "",
        },
      }),
    }),
    topics: build.query<ITopicsResponse, ITopicsRequest>({
      query: (payload) => ({
        url: `/api/v1/chapters/${payload.chapterId}/topics.json`,
        headers: {
          Authorization: getAccessToken() || "",
        },
      }),
    }),
  }),
});

export const {
  useCoursesQuery,
  useSubjectsQuery,
  useChaptersQuery,
  useTopicsQuery,
} = coursesApis;

export default coursesApis;
