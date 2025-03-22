import { HiHome } from "react-icons/hi";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface AppBreadcrumbProps {
  title: string;
  description: string;
  optionalDescription?: string; // optional olarak işaretlenebilir
  breadcrumbItems: BreadcrumbItem[];
}

const AppBreadcrumb: React.FC<AppBreadcrumbProps> = ({
  title,
  description,
  optionalDescription,
  breadcrumbItems,
}) => {
  return (
    <div
      className="-mx-4 mb-16 h-[300px] w-screen bg-cover bg-center max-sm:mb-12 max-sm:h-[400px]"
      style={{
        backgroundImage:
          "url(/top-bg.webp)",
      }}
    >
      <div className="relative h-full">
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="container relative mx-auto flex h-full flex-col justify-center">
          <br />
          <h1 className="px-4 text-4xl font-bold text-white">
            {title.toLocaleUpperCase("tr-TR")}
          </h1>
          <br />
          <div className="px-4 text-base text-gray-300">{description}</div>
          <br />
          {optionalDescription && (
            <div>
              <div className="px-4 text-base text-gray-300">
                {optionalDescription}
              </div>
            </div>
          )}
          {breadcrumbItems.length > 0 && (
            <div className="px-4">
              <Breadcrumb>
                <BreadcrumbItem href="/" style={{ color: "red" }}>
                  <span className="flex items-center text-gray-400">
                    <HiHome className="mr-2" /> NET Stratejik Metal
                  </span>
                </BreadcrumbItem>
                {breadcrumbItems.map((item, index) => (
                  <BreadcrumbItem href={item.href} key={index}>
                    <span
                      className={
                        index === breadcrumbItems.length - 1
                          ? "text-gray-300"
                          : "text-gray-400"
                      }
                    >
                      {item.label}
                    </span>
                  </BreadcrumbItem>
                ))}
              </Breadcrumb>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppBreadcrumb;
