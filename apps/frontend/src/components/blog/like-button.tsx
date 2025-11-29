"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LikeButtonProps {
  postId: string
  initialLikes?: number
}

export function LikeButton({ initialLikes = 0 }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
      setIsLiked(false)
    } else {
      setLikes(likes + 1)
      setIsLiked(true)
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={isLiked ? "default" : "outline"}
        size="sm"
        onClick={handleLike}
        className={cn(
          "relative overflow-hidden transition-all",
          isLiked && "bg-red-500 hover:bg-red-600 border-red-500"
        )}
      >
        <motion.div
          animate={isAnimating ? { scale: [1, 1.5, 1] } : {}}
          transition={{ duration: 0.6 }}
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-all",
              isLiked && "fill-current"
            )}
          />
        </motion.div>
        <span className="ml-2">{likes}</span>
      </Button>
    </div>
  )
}
