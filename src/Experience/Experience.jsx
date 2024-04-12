/* eslint-disable react/no-unknown-property */
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Lightformer } from "@react-three/drei";
function Experience() {
  return (
    <>
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
      <Float floatIntensity={10}>
        <Knot scale={1.2} position={[5.5, 0, 0]} />
      </Float>
      <Environment preset="city">
        <Lightformer
          intensity={18}
          position={[10, 5, 0]}
          scale={[10, 50, 1]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
    </>
  );
}

const Knot = (props) => (
  <mesh receiveShadow castShadow {...props}>
    <torusKnotGeometry args={[3, 1.1, 256, 32]} />
    <MeshTransmissionMaterial
      color={"#8fd3fe"}
      backside
      backsideThickness={5}
      thickness={2}
    />
  </mesh>
);
export default Experience;
