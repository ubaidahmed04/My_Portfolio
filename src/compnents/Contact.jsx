"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Computer from "./computer"; 

export default function ContactSection() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      alert("Message sent successfully!");
    },
  });

  return (
    <div className="w-full px-6 sm:px-12 py-12 bg-dark text-white">
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm bg-gray-800 px-4 py-1 rounded-full mb-2">
            💬 Have questions or ideas? Let’s talk!
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in Touch – Let’s Connect
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* ✅ FORM SECTION */}
        <motion.form
          onSubmit={formik.handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray rounded-xl p-6 md:p-8"
        >
          <div className="mb-6">
            <label className="block text-sm mb-2">Your name</label>
            <Input
              label="What's your good name?"
              color="#fafafa"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">Your Email</label>
            <Input
              label="What's your email address?"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              color="#fafafa"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">Your Message</label>
            <Textarea
              label="How can I help you?"
              name="message"
              color="#fafafa"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              rows={6}
            />
          </div>

          <Button
            type="submit"
            fullWidth
            className="bg-light text-black hover:scale-[1.01] transition-all"
          >
            SEND MESSAGE
          </Button>
        </motion.form>

        {/* ✅ CANVAS SECTION */}
        <motion.div
          className="w-full h-[400px] rounded-xl overflow-hidden bg-[#d97336]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
            <ambientLight intensity={0.5} color="#fff4e6" />
            <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
            <directionalLight position={[5, 9, 1]} castShadow intensity={2.5} color="#ffd9b3" />
            <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} />

            {/* GROUND PLANE */}
            <mesh receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[30, 30]} />
              <meshStandardMaterial color="#a46b2d" />
            </mesh>

            {/* ✅ 3D MODEL */}
            <group scale={0.03} position={[0, -1.49, -2]} castShadow>
              <Computer />
            </group>
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
}
