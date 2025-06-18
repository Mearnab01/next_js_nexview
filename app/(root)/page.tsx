"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Home = () => {
  return (
    <>
      {/* Hero CTA Section */}
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-[600px]">
          <h2 className="font-bold text-3xl text-white">
            Level Up Your Interview Game with{" "}
            <span className="text-amber-400">Nexview AI</span>
          </h2>
          <p className="text-light-100 text-lg">
            Practice with real interview questions and get instant AI-powered
            feedback to sharpen your skills.
          </p>
          <Button asChild className="btn-primary mt-4 max-sm:w-full">
            <Link href={"/interview"}>
              <BookOpen className="w-4 h-4" /> Start An Interview
            </Link>
          </Button>
        </div>

        <div className="max-sm:hidden w-[500px] h-[500px]">
          <Spline scene="https://prod.spline.design/yU4oqgUyj-3YZSUP/scene.splinecode" />
        </div>
      </section>

      {/* Interview Sections */}
      <motion.div
        className="mt-16 space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Your Interviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Your Interviews
            </h2>
          </div>

          <div className="interview-card bg-dark-2/50">
            {dummyInterviews.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))}
            <p className="text-gray-400 text-lg">
              You haven't taken any interviews yet
            </p>
          </div>
        </motion.div>

        {/* Taken Interviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Taken Interviews
            </h2>
          </div>

          <div className="interview-card bg-dark-2/50">
            {dummyInterviews.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))}
            <p className="text-gray-400 text-lg">
              There are no interviews available
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
