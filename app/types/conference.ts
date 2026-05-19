export interface ConferenceCall {
  id: number;
  title: string;
  host: string;
  participants: number;
  platform: "Zoom" | "Google Meet";
  link: string;
  status: "Live";
}