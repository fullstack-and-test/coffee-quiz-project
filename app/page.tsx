'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Answer {
  text: string;
  emoji: string;
  personality: 'bold' | 'sweet' | 'health' | 'indulgent';
}

interface Question {
  question: string;
  emoji: string;
  answers: Answer[];
}

interface PersonalityResult {
  type: 'bold' | 'sweet' | 'health' | 'indulgent';
  name: string;
  coffee: string;
  tagline: string;
  image: string;
  count: number;
  percentage: number;
}

const QUESTIONS: Question[] = [
  {
    question: 'Which Harry Potter House are you?',
    emoji: '🪄',
    answers: [
      { text: 'Gryffindor', emoji: '⚔️', personality: 'bold' },
      { text: 'Ravenclaw', emoji: '📚', personality: 'health' },
      { text: 'Hufflepuff', emoji: '🦡', personality: 'sweet' },
      { text: 'Slytherin', emoji: '🐍', personality: 'indulgent' },
    ],
  },
  {
    question: 'What\'s your ideal weekend vibe?',
    emoji: '🎯',
    answers: [
      { text: 'Adventure seeking—hiking, trying new things', emoji: '🚀', personality: 'bold' },
      { text: 'Cozy day in—reading, comfort activities', emoji: '📖', personality: 'sweet' },
      { text: 'Active & healthy—gym, running, wellness', emoji: '🏃', personality: 'health' },
      { text: 'Treat yourself—nice restaurant, fun indulgence', emoji: '🎉', personality: 'indulgent' },
    ],
  },
  {
    question: 'Netflix show you\'d binge first?',
    emoji: '📺',
    answers: [
      { text: 'Breaking Bad', emoji: '⚡', personality: 'bold' },
      { text: 'The Great British Baking Show', emoji: '🍰', personality: 'sweet' },
      { text: 'Headspace Guide to Meditation', emoji: '🧘', personality: 'health' },
      { text: 'The Crown', emoji: '👑', personality: 'indulgent' },
    ],
  },
  {
    question: 'What\'s your coffee order personality?',
    emoji: '☕',
    answers: [
      { text: 'Strong & no-nonsense', emoji: '💪', personality: 'bold' },
      { text: 'Sweet & smooth', emoji: '🍯', personality: 'sweet' },
      { text: 'Healthy & mindful', emoji: '🌱', personality: 'health' },
      { text: 'Fancy & luxurious', emoji: '✨', personality: 'indulgent' },
    ],
  },
  {
    question: 'Road trip snack of choice?',
    emoji: '🚗',
    answers: [
      { text: 'Spicy snacks', emoji: '🔥', personality: 'bold' },
      { text: 'Chocolate & candy', emoji: '🍫', personality: 'sweet' },
      { text: 'Healthy mix & nuts', emoji: '🥗', personality: 'health' },
      { text: 'Fancy pastries', emoji: '🧁', personality: 'indulgent' },
    ],
  },
  {
    question: 'How do you approach challenges?',
    emoji: '💡',
    answers: [
      { text: 'Head-on with intensity', emoji: '💥', personality: 'bold' },
      { text: 'With kindness & care', emoji: '💝', personality: 'sweet' },
      { text: 'Strategic & thoughtful', emoji: '🎯', personality: 'health' },
      { text: 'With style & flair', emoji: '🌟', personality: 'indulgent' },
    ],
  },
];

const PERSONALITY_DATA = {
  bold: {
    name: 'Bold Adventurer',
    coffee: 'Double Espresso',
    tagline: 'You live for intensity',
    image: '/images/espresso.jpg',
  },
  sweet: {
    name: 'Sweet Enthusiast',
    coffee: 'Caramel Latte',
    tagline: 'Life\'s too short for bitter',
    image: '/images/caramel-latte.jpg',
  },
  health: {
    name: 'Health Nut',
    coffee: 'Oat Milk Americano',
    tagline: 'Wellness in every sip',
    image: '/images/americano.jpg',
  },
  indulgent: {
    name: 'Indulgent Treat',
    coffee: 'Mocha with Whip',
    tagline: 'Coffee is dessert',
    image: '/images/mocha.jpg',
  },
};

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<('bold' | 'sweet' | 'health' | 'indulgent')[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (personality: 'bold' | 'sweet' | 'health' | 'indulgent') => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = (): PersonalityResult[] => {
    const counts = {
      bold: answers.filter((a) => a === 'bold').length,
      sweet: answers.filter((a) => a === 'sweet').length,
      health: answers.filter((a) => a === 'health').length,
      indulgent: answers.filter((a) => a === 'indulgent').length,
    };

    const results: PersonalityResult[] = Object.entries(counts).map(([type, count]) => ({
      type: type as 'bold' | 'sweet' | 'health' | 'indulgent',
      name: PERSONALITY_DATA[type as keyof typeof PERSONALITY_DATA].name,
      coffee: PERSONALITY_DATA[type as keyof typeof PERSONALITY_DATA].coffee,
      tagline: PERSONALITY_DATA[type as keyof typeof PERSONALITY_DATA].tagline,
      image: PERSONALITY_DATA[type as keyof typeof PERSONALITY_DATA].image,
      count,
      percentage: Math.round((count / 6) * 100),
    }));

    return results.sort((a, b) => b.percentage - a.percentage);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const question = QUESTIONS[currentQuestion];
  const results = calculateResults();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-purple-500 py-8 px-4">
      <div className="mx-auto max-w-2xl">
        {!showResults ? (
          <div className="rounded-2xl bg-white shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                ☕ What's Your Coffee Personality?
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Question {currentQuestion + 1} of {QUESTIONS.length}
              </p>
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="mb-10 text-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {question.emoji} {question.question}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.answers.map((answer, index) => {
                const gradients = [
                  'from-purple-500 to-pink-500',
                  'from-cyan-400 to-blue-500',
                  'from-green-400 to-teal-500',
                  'from-yellow-400 to-orange-500',
                ];

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer.personality)}
                    className={`bg-gradient-to-r ${gradients[index]} hover:shadow-2xl hover:scale-105 transition-all duration-200 p-6 rounded-2xl text-white font-semibold text-base md:text-lg cursor-pointer`}
                  >
                    <div className="text-3xl mb-3">{answer.emoji}</div>
                    <div>{answer.text}</div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-white shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                ✨ Your Coffee Personality Results!
              </h2>
              <p className="text-gray-600">Here's what we discovered about you...</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {results.map((result) => (
                <div
                  key={result.type}
                  className="rounded-xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 md:h-56 bg-gray-100">
                    <Image
                      src={result.image}
                      alt={result.coffee}
                      fill
                      className="object-cover"
                      priority={result.percentage === results[0].percentage}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {result.percentage}%
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                      {result.name}
                    </h3>
                    <p className="text-lg font-semibold text-purple-600 mb-3">
                      {result.coffee}
                    </p>
                    <p className="text-gray-600 italic">"{result.tagline}"</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:scale-105 transition-all duration-200 text-white font-bold py-4 px-8 rounded-xl text-lg md:text-xl"
              >
                🔄 Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
