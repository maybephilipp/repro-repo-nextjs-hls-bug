import Hls from 'hls.js'

export default function Page() {
  return <div>
    Hls: {Hls ? 'OK' : `${Hls}`}
  </div>
}
