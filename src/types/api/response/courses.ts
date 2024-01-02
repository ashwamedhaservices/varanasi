export interface ISubjectItem {
  id: number;
  name: string;
  description: string;
  image_url: string;
  photo_url: string;
  course_id: number;
  created_at: string;
  updated_at: string;
}

export interface ISubjectsResponse {
  data: ISubjectItem[];
}

export interface IChapterItem {
  id: number;
  name: string;
  description: string;
  image_url: string;
  photo_url: string;
  subject_id: number;
  created_at: string;
  updated_at: string;
}

export interface IChaptersResponse {
  data: IChapterItem[];
}

export interface ITopicItem {
  id: number;
  name: string;
  description: string;
  image_url: string;
  photo_url: string;
  video_url: string;
  content_url: string;
  chapter_id: number;
  created_at: string;
  updated_at: string;
  video_duration: number;
  streaming_url: string;
  author_id: number;
  notes_url: string;
  assignment_url: string;
  notification_url: string;
}

export interface ITopicsResponse {
  data: ITopicItem[];
}
