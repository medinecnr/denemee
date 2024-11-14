"use client"; // React 18+ ve Next.js 13+ ile kullanılıyor, client-side rendering (CSR) sağlamak için gerekli.
import "@/styles/globals.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="mt-4">
      <div className="p-4 text-center ust-kisim rounded-md flex items-center justify-center h-[400px]">
        <div>
          <motion.h1
            className="font-semibold text-white text-3xl rounded-md text-shadow bungee-tint-regular"
            initial={{ opacity: 0, y: -100 }} // Başlangıçta görünmez ve yukarıda
            animate={{ opacity: 1, y: 0 }} // Animasyon sonunda görünür ve normal konumda
            transition={{ duration: 1 }} // 1 saniyelik animasyon
          >
            Lorem ipsum.
          </motion.h1>

          <motion.p
            className="mt-2 text-3xl rounded-md text-shadow homemade-apple-regular yenilikci"
            initial={{ opacity: 0, y: 50 }} // Başlangıçta görünmez ve aşağıda
            animate={{ opacity: 1, y: 0 }} // Animasyon sonunda görünür ve normal konumda
            transition={{ duration: 1, delay: 0.2 }} // 1 saniye animasyon süresi, 0.2 saniye gecikme ile
          >
            Yenilikçi stratejilerle geleceğe güçlü adımlar atmak mümkün!
          </motion.p>
        </div>
      </div>
      <div className="mt-6 rounded-md flex items-center justify-center m-16">
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                What to watch
              </p>
              <h4 className="text-white font-medium text-large">
                Stream the Acme event
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-4.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Plant a tree
              </p>
              <h4 className="text-white font-medium text-large">
                Contribute to the planet
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-3.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Supercharged
              </p>
              <h4 className="text-white font-medium text-large">
                Creates beauty like a beast
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good nights sleep.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Get App
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex flex-col space-y-4 mt-16 items-stretch">
        <div className=" w-full flex-1 rounded-md flex items-center justify-center">
          <h1
            className={"monoton-regular text-3xl text-amber-400 text-center "}
          >
            Lorem ipsum dolor sit.
          </h1>
        </div>
        <div className=" w-full flex-1 rounded-md flex items-center justify-center">
          <h1
            className={
              "homemade-apple-regular text-3xl text-amber-800 text-justify my-10"
            }
          >
            Yenilikçi stratejilerle gelecege güçlü adımlar atmak
            mümkün!Yenilikçi stratejilerle gelecege güçlü adımlar atmak
            mümkün!Yenilikçi stratejilerle gelecege güçlü adımlar atmak mümkün!
          </h1>
        </div>
      </div>

      <div className="p-4 text-center alt-kisim rounded-md flex items-center justify-center h-[400px] mt-5">
        <div>
          <motion.h1
            className="font-semibold text-white text-3xl rounded-md text-shadow plaster-regular "
            initial={{ opacity: 0, y: -100 }} // Başlangıçta görünmez ve yukarıda
            animate={{ opacity: 1, y: 0 }} // Animasyon sonunda görünür ve normal konumda
            transition={{ duration: 3, delay: 2 }} // 1 saniyelik animasyon
          >
            Lorem.
          </motion.h1>

          <motion.p
            className="mt-2 text-white text-3xl rounded-md text-shadow medula-one-regular"
            initial={{ opacity: 0, y: 50 }} // Başlangıçta görünmez ve aşağıda
            animate={{ opacity: 1, y: 0 }} // Animasyon sonunda görünür ve normal konumda
            transition={{ duration: 3, delay: 2 }} // 1 saniye animasyon süresi, 0.2 saniye gecikme ile
          >
            Whereas recognition of the inherent dignity. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
