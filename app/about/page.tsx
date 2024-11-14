"use client"; // İstemci tarafı bileşeni olarak işaretleme
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import "@/styles/globals.css";

export default function AboutPage() {
  return (
    <div className="mt-4">
      <div className="flex justify-center items-center w-full gap-5">
        {/* Sol ve Sağ Bölümleri gizlemek için 'hidden' sınıfını mobilde kullanacağız */}
        <div className="hidden lg:block  sm:block ">
          {" "}
          {/* lg:block sadece büyük ekranlarda gösterir */}
          <div>
            <Image
              isBlurred
              src="/img/1.jpg"
              alt="NextUI Album Cover"
              className="object-cover"
              width={300}
              height={130}
            />
          </div>
          <div className="flex pt-2">
            <div>
              <Image
                isBlurred
                src="/img/2.jpg"
                alt="NextUI Album Cover"
                className="object-cover pe-2"
                width={120}
                height={130}
              />
            </div>
            <div>
              <Image
                isBlurred
                src="/img/3.jpg"
                alt="NextUI Album Cover"
                className="object-cover"
                width={180}
                height={130}
              />
            </div>
          </div>
        </div>

        {/* Ortadaki div */}
        <div>
          <div className="pt-2">
            <div>
              <Image
                isBlurred
                src="/img/4.jpg"
                alt="NextUI Album Cover"
                className="object-cover"
                width={300}
                height={130}
              />
            </div>
            <div className="flex pt-2">
              <div>
                <Image
                  isBlurred
                  src="/img/5.jpg"
                  alt="NextUI Album Cover"
                  className="object-cover pe-2"
                  width={110}
                  height={130}
                />
              </div>
              <div>
                <Image
                  isBlurred
                  src="/img/6.jpg"
                  alt="NextUI Album Cover"
                  className="object-cover"
                  width={190}
                  height={130}
                />
              </div>
            </div>
          </div>

          <div className="flex pt-2">
            <div>
              <Image
                isBlurred
                src="/img/7.jpg"
                alt="NextUI Album Cover"
                className="object-cover pe-2"
                width={190}
                height={130}
              />
            </div>
            <div>
              <Image
                isBlurred
                src="/img/8.jpg"
                alt="NextUI Album Cover"
                className="object-cover"
                width={110}
                height={130}
              />
            </div>
          </div>

          <div className="pt-2">
            <Image
              isBlurred
              src="/img/9.jpg"
              alt="NextUI Album Cover"
              className="object-cover"
              width={300}
              height={130}
            />
          </div>
        </div>

        {/* Sol ve Sağ Bölümleri gizlemek için 'hidden' sınıfını mobilde kullanacağız */}
        <div className="hidden sm:block lg:block">
          {" "}
          {/* lg:block sadece büyük ekranlarda gösterir */}
          <div>
            <Image
              isBlurred
              src="/img/10.jpg"
              alt="NextUI Album Cover"
              className="object-cover"
              width={300}
              height={130}
            />
          </div>
          <div className="flex pt-2">
            <div>
              <Image
                isBlurred
                src="/img/11.jpg"
                alt="NextUI Album Cover"
                className="object-cover pe-2"
                width={120}
                height={130}
              />
            </div>
            <div>
              <Image
                isBlurred
                src="/img/12.jpg"
                alt="NextUI Album Cover"
                className="object-cover"
                width={180}
                height={130}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="flex justify-center items-center bungee-spice-regular text-7xl">
          DESTEK
        </h1>
        <p className="text-center mt-5 ">
          lorem ipsum sdkf fdsf dsf dfdsfds dfdsfsd dsfdsdfds dsfdsfsd dsfsdfsd
          dsfdsf
        </p>
      </div>
      <div className="flex gap-4 mt-10">
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
        >
          <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="/img/a1.png"
              width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              Notify me
            </Button>
          </CardFooter>
        </Card>
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
        >
          <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="/img/a2.png"
              width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              Notify me
            </Button>
          </CardFooter>
        </Card>
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
        >
          <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="/img/a3.png"
              width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              Notify me
            </Button>
          </CardFooter>
        </Card>
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
        >
          <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="/img/a4.png"
              width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              Notify me
            </Button>
          </CardFooter>
        </Card>
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
        >
          <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="/img/a5.png"
              width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              Notify me
            </Button>
          </CardFooter>
        </Card>
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
        >
          <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="/img/a6.png"
              width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
              Notify me
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
