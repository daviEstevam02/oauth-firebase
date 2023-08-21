import { PaginationParams } from "../pagination";

export type NotificationType = "PushNotification" | "EmailNotification";

export type NotificationStatus = "New" | "Failed" | "Sent" | "Read";

export interface NotificationData {
  type: NotificationType;
  receiver: {
    userId: string,
    token: string
  }
  uri?: string;
  icon: string;
  status: NotificationStatus;
  content: string;
  id: string;
  createdAt: Date;
}

export interface CreateOrEditNotification {
  status: NotificationStatus;
}

export interface NotificationQueryParams extends PaginationParams {
  userId: number;
}
