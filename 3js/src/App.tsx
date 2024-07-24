import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

const App = () => {
  const { lightColor, lightIntensity } = useControls({ 
    lightColor: "white",
  });

  const Cube = ({ position, color }) => {
    const ref = useRef();
    useFrame((state, delta) => {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;
      ref.current.rotation.z += delta * 5;
    });

    return (
      <mesh position={position} ref={ref}>
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };

  return (
    <Canvas>
      <directionalLight 
        position={[0, 0, 2]} 
        color={lightColor}
      />
      <ambientLight />
      <group position={[0, -1, 0]}>
        <Cube position={[-1, 0, 0]} color="hotpink" />
        <Cube position={[1, 0, 0]} color="blue" />
        <Cube position={[-1, 1.5, 0]} color="orange" />
        <Cube position={[1, 1.5, 0]} color="red" />
      </group>
      <mesh position={[6, 5, 0]}>
        <sphereGeometry args={[1, 30, 16]} />
        <meshStandardMaterial color="lightblue" wireframe />
      </mesh>
      <mesh position={[3, 5, 0]}>
        <torusGeometry args={[1, 0.2]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[-3, 5, 0]}>
        <torusKnotGeometry args={[1, 0.2]} />
        <MeshWobbleMaterial color="blue" wireframe />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default App;