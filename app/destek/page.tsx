"use client";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import "@/styles/globals.css";
import { CardHeader, CardBody, Divider, Link } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/public/SearchIcon.jsx";
import { Tabs, Tab } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <div className="mt-4">
      <div className="flex justify-center items-center w-full gap-5">
        <div className="hidden lg:block  sm:block ">
          <div>
            <Image
              isBlurred
              src="/img/1.jpg"
              alt="NextUI Album Cover"
              className="object-cover hover:scale-105"
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
                className="object-cover pe-2 hover:scale-105"
                width={120}
                height={130}
              />
            </div>
            <div>
              <Image
                isBlurred
                src="/img/3.jpg"
                alt="NextUI Album Cover"
                className="object-cover hover:scale-105"
                width={180}
                height={130}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="pt-2">
            <div>
              <Image
                isBlurred
                src="/img/4.jpg"
                alt="NextUI Album Cover"
                className="object-cover hover:scale-105"
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
                  className="object-cover pe-2 hover:scale-105"
                  width={110}
                  height={130}
                />
              </div>
              <div>
                <Image
                  isBlurred
                  src="/img/6.jpg"
                  alt="NextUI Album Cover"
                  className="object-cover hover:scale-105"
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
                className="object-cover pe-2 hover:scale-105"
                width={190}
                height={130}
              />
            </div>
            <div>
              <Image
                isBlurred
                src="/img/8.jpg"
                alt="NextUI Album Cover"
                className="object-cover hover:scale-105"
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
              className="object-cover hover:scale-105"
              width={300}
              height={130}
            />
          </div>
        </div>
        <div className="hidden sm:block lg:block">
          <div>
            <Image
              isBlurred
              src="/img/10.jpg"
              alt="NextUI Album Cover"
              className="object-cover hover:scale-105"
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
                className="object-cover pe-2 hover:scale-105"
                width={120}
                height={130}
              />
            </div>
            <div>
              <Image
                isBlurred
                src="/img/12.jpg"
                alt="NextUI Album Cover"
                className="object-cover hover:scale-105"
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
        <p className="text-center mt-5 medula-one-regular text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
          turpis at nisl interdum suscipit. Integer luctus risus magna.
        </p>
      </div>
      <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none shadow-inner ml-1 z-10 max-w-[400px] w-full mx-auto hover:scale-105 hover:scale-105"
          style={{
            boxShadow: "inset 0 4px 20px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex justify-center">
            <Image
              alt="Woman listening to music"
              className="object-cover"
              height={200}
              src="/img/a1.png"
              width={200}
            />
          </div>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny">Available soon.</p>
            <Button
              className="text-tiny bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          radius="lg"
          className="border-none shadow-inner ml-1 z-10 max-w-[400px] w-full mx-auto hover:scale-105"
          style={{
            boxShadow: "inset 0 4px 20px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex justify-center">
            <Image
              alt="Woman listening to music"
              className="object-cover"
              height={200}
              src="/img/a2.png"
              width={200}
            />
          </div>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny">Available soon.</p>
            <Button
              className="text-tiny bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          radius="lg"
          className="border-none shadow-inner ml-1 z-10 max-w-[400px] w-full mx-auto hover:scale-105"
          style={{
            boxShadow: "inset 0 4px 20px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex justify-center">
            <Image
              alt="Woman listening to music"
              className="object-cover"
              height={200}
              src="/img/a3.png"
              width={200}
            />
          </div>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny">Available soon.</p>
            <Button
              className="text-tiny bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          radius="lg"
          className="border-none shadow-inner ml-1 z-10 max-w-[400px] w-full mx-auto hover:scale-105"
          style={{
            boxShadow: "inset 0 4px 20px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex justify-center">
            <Image
              alt="Woman listening to music"
              className="object-cover"
              height={200}
              src="/img/a4.png"
              width={200}
            />
          </div>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny">Available soon.</p>
            <Button
              className="text-tiny bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          radius="lg"
          className="border-none shadow-inner ml-1 z-10 max-w-[400px] w-full mx-auto hover:scale-105"
          style={{
            boxShadow: "inset 0 4px 20px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex justify-center">
            <Image
              alt="Woman listening to music"
              className="object-cover"
              height={200}
              src="/img/a5.png"
              width={200}
            />
          </div>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny">Available soon.</p>
            <Button
              className="text-tiny bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>

        <Card
          isFooterBlurred
          radius="lg"
          className="border-none shadow-inner ml-1 z-10 max-w-[400px] w-full mx-auto hover:scale-105"
          style={{
            boxShadow: "inset 0 4px 20px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="flex justify-center">
            <Image
              alt="Woman listening to music"
              className="object-cover"
              height={200}
              src="/img/a6.png"
              width={200}
            />
          </div>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny">Available soon.</p>
            <Button
              className="text-tiny bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-16 w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-screen-xl">
          <Card className="max-w-[400px] w-full mx-auto ">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col justify-center items-center w-full">
                <p className="text-md medula-one-regular text-2xl">ONARIM</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="medula-one-regular text-xl">
                Vitae elit cursus, lorem ipsum dolor sit amet, placerat auctor.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="#"
                className="medula-one-regular text-xl"
              >
                Ziyaret Edin.
              </Link>
            </CardFooter>
          </Card>

          <Card className="max-w-[400px] w-full mx-auto">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col justify-center items-center w-full">
                <p className="text-md medula-one-regular text-2xl">BAKIM</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="medula-one-regular text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="#"
                className="medula-one-regular text-xl"
              >
                Ziyaret Edin..
              </Link>
            </CardFooter>
          </Card>

          <Card className="max-w-[400px] w-full mx-auto">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col justify-center items-center w-full">
                <p className="text-md medula-one-regular text-2xl">
                  FATURALAMA VE ABONELİKLER
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="medula-one-regular text-xl">
                Etiam commodo magna sit amet velit cursus, lorem ipsum dolor.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="#"
                className="medula-one-regular text-xl"
              >
                Ziyaret Edin.
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mt-16 w-full gap-5">
        <h1 className="flex justify-center items-center medula-one-regular text-4xl">
          Daha fazla konu arayın
        </h1>
        <div
          className="mt-6 h-[240px] px-8 rounded-2xl flex justify-center items-center text-white shadow-lg"
          style={{
            background:
              "linear-gradient(to top right, rgba(244, 114, 182, 0.3), rgba(250, 204, 21, 0.3))",
          }}
        >
          <Input
            label="Search"
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>
      <div className="mt-16 w-full gap-3 flex flex-col justify-center items-center shadow-lg rounded-xl ">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="/img/destek1.png"
          width={200}
        />
        <h1 className="text-5xl medula-one-regular">Destek Alın</h1>
        <p className="medula-one-regular text-2xl">
          Bize biraz bilgi verin, size en uygun çözümü sunalım. Telefon, sohbet,
          e-posta ve daha pek çok yolla iletişim kurun.
        </p>
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 opacity-80 text-white shadow-lg mb-10 medula-one-regular text-xl"
        >
          Hemen Baslayın
        </Button>
      </div>
      <div className="mt-16 w-full gap-8 flex flex-col md:flex-row justify-center items-stretch px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl shadow-lg p-6 w-full md:w-2/3 flex flex-col transition-transform transform hover:scale-105">
          <h3 className="text-3xl font-semibold mb-6 hover:text-blue-600 transition-colors medula-one-regular">
            Sahte parçalar konusunda dikkatli olun
          </h3>
          <p className="text-gray-500 mb-6 medula-one-regular text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            laoreet erat non ex facilisis, sed tincidunt nisi malesuada. Fusce
            aliquam ultricies arcu, ac tincidunt ante volutpat eget. Morbi
            ultricies erat ut augue egestas, a lacinia augue tincidunt. Cras at
            lectus nec lectus luctus vulputate.
          </p>
          <p className="text-gray-500 medula-one-regular text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel turpis at nisl interdum suscipit. Integer luctus risus magna.
          </p>
        </div>

        <div className="rounded-xl shadow-lg p-6 w-full md:w-1/3 flex flex-col transition-transform transform hover:scale-105">
          <h3 className="text-3xl font-semibold mb-6 hover:text-blue-600 transition-colors medula-one-regular ">
            Hediye kartı dolandırıcılıklarına karsı dikkatli olun
          </h3>
          <p className="text-gray-500 mb-6 medula-one-regular text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            laoreet erat non ex facilisis, sed tincidunt nisi malesuada. Fusce
            aliquam ultricies arcu, ac tincidunt ante volutpat eget. Morbi
            ultricies erat ut augue egestas, a lacinia augue tincidunt. Cras at
            lectus nec lectus luctus vulputate.
          </p>
          <a
            href="/"
            className="text-pink-500 font-medium mt-4 hover:text-red-800 transition-colors medula-one-regular text-xl"
          >
            Daha fazla bilgi
          </a>
        </div>
      </div>
      <div className="flex w-full flex-col mt-16 px-4 sm:px-6 lg:px-8">
        <Tabs aria-label="Options">
          <Tab
            key="destek"
            title="Destek"
            className="medula-one-regular text-2xl"
          >
            <Card className="rounded-xl shadow-lg p-6 text-gray-500">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="servis"
            title="Servis ve Onarım"
            className="medula-one-regular text-2xl"
          >
            <Card className="text-gray-500 rounded-xl shadow-lg p-6">
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="iletisim"
            title="Iletisim"
            className="medula-one-regular text-2xl"
          >
            <Card className="text-gray-500 rounded-xl shadow-lg p-6">
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                +(90) 555 555 55 55
                <br />
                anonim@gmail.com
                <br />
                123 sokak No:12 Bornova/İzmir
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
