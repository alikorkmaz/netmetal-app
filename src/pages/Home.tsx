import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppBreadcrumb from "../components/AppBreadcrumb";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

export function Home() {
  return (
    <>
      <AppBreadcrumb
        title="NET Stratejik Metal"
        description="NET Stratejik Metal, paslanmaz çelik ve metal ürünlerinde güvenilir bir çözüm ortağınız olarak hizmet vermektedir. Geniş bir ürün yelpazesi ile, paslanmaz çelik çubuk, altı köşe, lama ve özel ölçü kesimli malzemelerde yüksek stok seviyelerine sahibiz. Avrupa'nın önde gelen tedarikçileriyle işbirliği yaparak, hızlı teslimat ve özel üretim seçenekleri sunuyoruz. Müşterilerimizin taleplerine göre esnek çözümler üretirken, her projede kaliteyi ve güveni ön planda tutuyoruz."
        breadcrumbItems={[]}
      />

      <section className="mb-24 rounded-lg max-sm:mb-2">
        <div className="flex flex-col items-center sm:flex-row sm:space-x-6">
          <div className="flex-1 text-center sm:text-left">
            <span className="mb-3 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold">
              %100 Avrupa Menşeli
            </span>
            <span className="mb-3 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold">
              3.1 Üretici Sertifikalı
            </span>
            <h3 className="mb-3 text-xl font-bold">
              Müşteri memnuniyetini ön planda tutarak, %100 Avrupa menşeli ve
              3.1 üretici sertifikalı ürünlerimiz titizlikle takip edilmektedir
            </h3>
            <p className="mb-3">
              Avrupa kökenli paslanmaz çelik ürünleriyle, yüksek kaliteli ve
              hızlı tedarik çözümleri sunmak için geniş bir tedarikçi ağımız
              bulunmaktadır.
            </p>
            <p className="mb-6">
              Almanya, İtalya, Fransa, Avusturya ve İspanya'dan güvenilir
              tedarikçilerimizle sağladığımız ürünler, stoktan hızlı teslimat
              olanağı sağlamakta ve özel taleplerinizi karşılayacak şekilde
              özelleştirilmiş üretim seçenekleri sunmaktadır.
            </p>

            <div className="max-sm:flex max-sm:justify-center">
              <a href="/contact">
                <Button outline pill>
                  Bizimle İletişime Geçin
                  <HiOutlineArrowRight className="ml-2 size-6" />
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-6 flex-1 text-center sm:mt-0">
            <img
              src="/home0.avif"
              alt="Paslanmaz Çelik İletişim"
              className="mx-auto rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="mb-24 rounded-lg max-sm:mb-2">
        <div className="flex flex-col items-center sm:flex-row sm:space-x-6">
          <div className="mt-6 flex-1 text-center sm:mt-0">
            <img
              src="/home2.jpg"
              alt="Paslanmaz Çelik Kalitelerimiz"
              className="mx-auto rounded-lg shadow-sm"
            />
          </div>
          <div className="flex-1 text-center sm:text-left max-sm:mt-8">
            <span className="mb-3 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold">
              Yüksek Kalite
            </span>
            <span className="mb-3 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold">
              Güvenilir Tedarik
            </span>
            <h3 className="mb-2 text-xl font-bold">
              Paslanmaz Çelik Kalitelerimiz
            </h3>
            <p className="mb-6">
              NET Stratejik Metal, endüstrilere özel olarak geliştirilmiş
              paslanmaz çelik kaliteleri sunmaktadır. Her biri, ilgili
              sektörlerin gereksinimlerine göre özelleştirilmiş olup, yüksek
              kalite standartlarına uygun şekilde üretilmiştir. Gıda, petrokimya
              gibi çeşitli sektörlere yönelik çözümler sunuyoruz.
            </p>
            <div className="max-sm:flex max-sm:justify-center">
              <a href="/qualities">
                <Button outline pill>
                  Kalitelerimizi Keşfedin
                  <HiOutlineArrowRight className="ml-2 size-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24 rounded-lg max-sm:mb-2">
        <div className="flex flex-col items-center sm:flex-row sm:space-x-6">
          <div className="flex-1 text-center sm:text-left  max-sm:mt-8">
            <span className="mb-3 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold">
              Geniş Ürün Yelpazesi
            </span>
            <h3 className="mb-3 text-xl font-bold">
              Çeşitli Paslanmaz Çelik Ürünlerimiz
            </h3>
            <p className="mb-3">
              Paslanmaz çelik yuvarlak, lama, altı köşe ve özel ölçü kesim gibi
              çeşitli ürün gruplarımız ile, her ihtimale uygun çözüm sunuyoruz.
              Yüksek kaliteli malzeme seçeneklerimizle projelerinizi hızlı bir
              şekilde tamamlayabilirsiniz.
            </p>
            <p className="mb-6">
              Ürünlerimizi incelemek için ürünler sayfamıza göz atabilirsiniz.
            </p>
            <div className="max-sm:flex max-sm:justify-center">
              <a href="/products">
                <Button outline pill>
                  Ürünlerimizi Keşfedin
                  <HiOutlineArrowRight className="ml-2 size-6" />
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-6 flex-1 text-center sm:mt-0">
            <img
              src="/home1.jpg"
              alt="Ürünlerimiz"
              className="mx-auto rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="mb-24 rounded-lg max-sm:mb-2">
        <div className="flex flex-col items-center sm:flex-row sm:space-x-6">
          <div className="mt-6 flex-1 text-center sm:mt-0">
            <img
              src="/home3.avif"
              alt="Sektörlere Özel Paslanmaz Çelik"
              className="mx-auto rounded-lg shadow-sm"
            />
          </div>
          <div className="flex-1 text-center sm:text-left  max-sm:mt-8">
            <span className="mb-3 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold">
              Sektörlere Özel Çözümler
            </span>
            <h3 className="mb-3 text-xl font-bold">
              Paslanmaz Çelik Çözümleri Farklı Sektörlerde
            </h3>
            <p className="mb-3">
              Paslanmaz çelik ürünlerimiz, havacılık, otomotiv, gıda ve enerji
              gibi geniş bir sektöre özel çözümler sunmaktadır.
            </p>
            <p className="mb-6">
              Her sektördeki özel ihtiyaçlara yönelik, yüksek kaliteli ve
              güvenilir çözümler sağlamaktayız. İhtiyacınıza uygun malzeme
              çözümleri burada sizi bekliyor.
            </p>
            <div className="max-sm:flex max-sm:justify-center">
              <a href="/sectors">
                <Button outline pill>
                  Sektörleri Keşfedin
                  <HiOutlineArrowRight className="ml-2 size-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
