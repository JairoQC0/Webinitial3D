import { useEffect } from "react"
import { Scene, 
    WebGLRenderer, 
    PerspectiveCamera, 
    Mesh, 
    MeshBasicMaterial, 
    BoxGeometry, 
    SphereGeometry, 
    TextureLoader, 
    BackSide, 
    MeshPhongMaterial,
    DirectionalLight,
    HemisphereLight,
    AmbientLight
    } from "three"

function HomePage(){
    useEffect(()=>{
        const scene = new Scene()

        const renderer = new WebGLRenderer({
            antialias: true,
            canvas: document.getElementById("bg"),
        })

        const camera = new PerspectiveCamera(
            60, window.innerWidth / window.innerHeight, 0.1, 1000)
        // Create Cube
        const geometry = new BoxGeometry(1,1,1)
        const material = new MeshBasicMaterial({ color: 0xffffff })
        const cube = new Mesh(geometry, material)    
        scene.add(cube)
        camera.position.z = 6
        
        //Create Skybox
        const Skygeometry = new SphereGeometry(360,25,25)
        const loader = new TextureLoader()
        const textura= loader.load("/custom-sky.png")
        const material2 = new MeshPhongMaterial({
            map: textura
        })
        
        const skybox = new Mesh(Skygeometry,material2)
        scene.add(skybox)
        skybox.material.side = BackSide

        // Create Illumination
        scene.add(new AmbientLight(0xffffff, 0.3))
        scene.add(new HemisphereLight(0xffffff, 1))

        // Create Animation

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