import { cn, getRandomInterviewCover } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizeType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  const badgeColor =
    {
      Behavioral: "bg-light-400",
      Mixed: "bg-light-600",
      Technical: "bg-light-800",
    }[normalizeType] || "bg-light-600";

  return (
    <div className="card-border w-[500px] max-sm:w-full">
      <div className="card-interview p-6 space-y-2 relative">
        {/* Badge */}
        <div
          className={cn(
            "absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600",
            badgeColor
          )}
        >
          <p className="badge-name">{normalizeType}</p>
        </div>

        {/* Avatar + Role */}
        <div className="flex items-center gap-4 p-2 border-2 border-white rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-shadow duration-300">
          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            width={90}
            height={90}
            className="rounded-full object-cover border border-white/10"
          />
          <h3 className="text-xl font-semibold capitalize">{role} Interview</h3>
        </div>

        {/* Date + Score */}
        <div className="flex flex-row gap-6 items-center justify-evenly text-sm text-gray-300">
          <div className="flex items-center gap-2 border border-white/10 px-2 py-1 rounded-md">
            <Image src="/calendar.svg" width={18} height={18} alt="calendar" />
            <p>{formattedDate}</p>
          </div>
          <div className="flex items-center gap-2 border border-white/10 px-2 py-1 rounded-md">
            <Image src="/star.svg" width={18} height={18} alt="star" />
            <p>{feedback?.totalScore || "---"}/100</p>
          </div>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-sm text-gray-300">
          {feedback?.finalAssessment ||
            "You haven't take any interview. Give an interview and improve chances"}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          {/* <DisplayTechIcons techStack={techstack} /> */}
          <Button asChild>
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
