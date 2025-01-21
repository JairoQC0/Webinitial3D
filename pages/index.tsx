import { useEffect } from "react"
import { Scene, 
    WebGLRenderer, 
    PerspectiveCamera, 
    Mesh, 
    MeshBasicMaterial, 
    BoxGeometry } from "three"

function HomePage(){
    useEffect(()=>{
        const scene = new Scene()

        const renderer = new WebGLRenderer({
            antialias: true,
            canvas: document.getElementById("bg"),
        })

        const camera = new PerspectiveCamera(
            30, window.innerWidth / window.innerHeight, 0.1, 1000)
        // Create Cube
        const geometry = new BoxGeometry(1,1,1)
        const material = new MeshBasicMaterial({ color: 0xffffff })
        const cube = new Mesh(geometry, material)    
        scene.add(cube)
        camera.position.z = 6

        function animate() {
            cube.rotation.x += 0.01
            cube.rotation.y += 0.03
            renderer.render(scene,camera)
            requestAnimationFrame(animate)
        }

        renderer.setSize(window.innerWidth, window.innerHeight)
        animate()
        })
    return <canvas id="bg"/>
}

export default HomePage