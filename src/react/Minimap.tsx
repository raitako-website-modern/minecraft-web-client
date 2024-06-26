import { useRef, useEffect } from 'react'
import { showModal, hideModal } from '../globalState'
import { useIsModalActive } from './utilsApp'
import { MinimapDrawer, DrawerAdapter } from './MinimapDrawer'
 

export default ({ adapter }: { adapter: DrawerAdapter | null }) => {
  const fullMapOpened = useIsModalActive('full-map')
  const canvasTick = useRef(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawerRef = useRef<MinimapDrawer | null>(null)

  function updateMap () {
    if (!adapter) return
    if (drawerRef.current && canvasTick.current % 2 === 0) {
      drawerRef.current.draw(adapter.getHighestBlockColor, adapter.playerPosition.x, adapter.playerPosition.z)
      if (canvasTick.current % 300 === 0) {
        drawerRef.current.deleteOldWorldColors(adapter.playerPosition.x, adapter.playerPosition.z)
      }
    }
    canvasTick.current += 1
  }

  const toggleFullMap = () => {
    if (fullMapOpened) {
      hideModal({ reactType: 'full-map' })
    } else {
      showModal({ reactType: 'full-map' })
    }
  }

  const setWarp = (e: MouseEvent) => {
    if (!e.target) return
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect()
    const x = (e.pageX - rect.left) * canvasRef.current!.width / rect.width  
    const y = (e.pageY - rect.top) * canvasRef.current!.height / rect.height  
    const coords = drawerRef.current?.mouseToWorldPos(x, y, bot.entity.position)
    console.log('coords:', x, y, '| In game coords:', coords)
  }

  useEffect(() => {
    if (canvasRef.current && !drawerRef.current) {
      drawerRef.current = new MinimapDrawer(canvasRef.current)
    } else if (canvasRef.current && drawerRef.current) {
      drawerRef.current.canvas = canvasRef.current
    }
  }, [canvasRef.current, fullMapOpened])

  useEffect(() => {
    console.log('full map toggled')
    if (fullMapOpened && canvasRef.current) {
      console.log('in if')
      canvasRef.current.addEventListener('click', setWarp)
    }

    return () => {
      console.log('memory clear')
      canvasRef.current?.removeEventListener('click', setWarp)
    }
  }, [fullMapOpened])

  useEffect(() => {
    if (adapter) {
      adapter.on('updateMap', updateMap)
      adapter.on('toggleFullMap', toggleFullMap)
    }

    return () => {
      if (adapter) {
        adapter.off('updateMap', updateMap)
        adapter.off('toggleFullMap', toggleFullMap)
      }
    }
  }, [adapter])

  return fullMapOpened ? <div 
    style={{
      position: 'absolute',
      inset: '0px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid red',
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }}
  >
    <canvas 
      style={{
        width: '35%',
      }}
      width={150} 
      height={150} 
      ref={canvasRef}
    ></canvas>

  </div> : <div
    className='minimap'
    style={{
      position: 'absolute',
      right: '0px',
      top: '0px',
      padding: '5px 5px 0px 0px',
      border: '2px solid red'
    }}
  >
    <canvas width={50} height={50} ref={canvasRef}></canvas>

  </div>
}
