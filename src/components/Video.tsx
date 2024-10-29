export function Video() {
  return (
    <video
    preload="none"
    autoPlay
    className="absolute inset-0 w-full h-full object-cover"
    loop
    muted>
      <source src={'https://videos.pexels.com/video-files/9669392/9669392-hd_1080_1920_30fps.mp4'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}