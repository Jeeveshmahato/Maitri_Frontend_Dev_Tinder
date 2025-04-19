import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useState } from 'react';

const UserCard = ({ user, onSwipe }) => {
  const x = useMotionValue(0);
  const { _id, firstName, lastName, skills, age, gender, img_Url } = user;

  // Animation properties
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.8, 1, 1, 1, 0.8]);

  // Background overlay colors
  const leftBgOpacity = useTransform(x, [-200, -100, 0], [0.3, 0, 0]);
  const rightBgOpacity = useTransform(x, [0, 100, 200], [0, 0, 0.3]);

  const handleDragEnd = () => {
    const xValue = x.get();
    if (xValue < -100) {
      onSwipe(_id, 'left');
    } else if (xValue > 100) {
      onSwipe(_id, 'right');
    }
  };

  return (
    <div className="relative w-full max-w-md h-[580px]">
      {/* Background overlays */}
      <motion.div 
        className="absolute inset-0 bg-red-500/20 rounded-xl pointer-events-none"
        style={{ opacity: leftBgOpacity }}
      />
      <motion.div 
        className="absolute inset-0 bg-green-500/20 rounded-xl pointer-events-none"
        style={{ opacity: rightBgOpacity }}
      />

      <motion.div
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
        dragElastic={0.2}
        style={{ 
          x,
          rotate,
          opacity,
        }}
        onDragEnd={handleDragEnd}
        className="absolute w-full h-full cursor-grab active:cursor-grabbing"
      >
        <div className="card bg-base-100 w-full h-full shadow-lg">
          <figure className="px-4 pt-4">
            <img
              className="w-full h-96 object-cover rounded-xl"
              src={img_Url}
              alt="Profile"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{firstName} {lastName}</h2>
            <p className="text-lg">{age} • {gender}</p>
            <div className="flex flex-wrap gap-2 my-2">
              {skills?.map((skill) => (
                <span key={skill} className="badge badge-outline">{skill}</span>
              ))}
            </div>
          </div>

          {/* Swipe indicators */}
          <motion.div 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none"
            style={{ 
              opacity: useTransform(x, [-200, -100], [1, 0]),
              scale: useTransform(x, [-200, -100], [1.5, 1]) 
            }}
          >
            <div className="text-6xl font-bold border-4 border-red-500 rounded-full w-20 h-20 flex items-center justify-center">
              ✕
            </div>
          </motion.div>

          <motion.div 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 pointer-events-none"
            style={{ 
              opacity: useTransform(x, [100, 200], [0, 1]),
              scale: useTransform(x, [100, 200], [1, 1.5]) 
            }}
          >
            <div className="text-6xl font-bold border-4 border-green-500 rounded-full w-20 h-20 flex items-center justify-center">
              ✓
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserCard;