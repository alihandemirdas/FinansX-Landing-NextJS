"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Download,
  CreditCard,
  TrendingUp,
  Shield,
  Star,
  BarChart2,
  Lock,
  Globe,
  Zap,
} from "lucide-react";

export default function FinansxLandingPage() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;

      backgroundRef.current.style.backgroundImage = `
        radial-gradient(
          600px circle at ${xPercent}% ${yPercent}%, 
          rgba(29, 78, 216, 0.15), 
          transparent 50%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: BarChart2,
      color: "text-blue-400 bg-blue-900/30",
      title: "Anlık Piyasa Verileri",
      description:
        "Döviz, altın ve kripto para birimlerinin güncel verilerini anında görün.",
      details: [
        "Gerçek zamanlı kur bilgileri",
        "Detaylı grafik ve trend analizleri",
        "Çoklu para birimi karşılaştırmaları",
      ],
    },
    {
      icon: Globe,
      color: "text-green-400 bg-green-900/30",
      title: "Küresel Finans Haritası",
      description: "Dünya çapındaki finansal hareketleri yakından takip edin.",
      details: [
        "Uluslararası borsa verileri",
        "Küresel ekonomik göstergeler",
        "Ülke bazlı finansal raporlar",
      ],
    },
    {
      icon: Lock,
      color: "text-purple-400 bg-purple-900/30",
      title: "Gelişmiş Güvenlik",
      description:
        "Kişisel ve finansal verileriniz için en üst düzey güvenlik.",
      details: [
        "Çift faktörlü kimlik doğrulama",
        "Uçtan uca şifreleme",
        "Sürekli güvenlik güncellemeleri",
      ],
    },
    {
      icon: Zap,
      color: "text-orange-400 bg-orange-900/30",
      title: "Hızlı ve Kolay Kullanım",
      description:
        "Karmaşık finansal işlemleri basit ve hızlı bir şekilde yapın.",
      details: [
        "Sezgisel kullanıcı arayüzü",
        "Hızlı işlem imkanları",
        "Anlık bildirim sistemi",
      ],
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-900 text-white relative"
      ref={backgroundRef}
    >
      {/* Previous navbar and hero section code remains the same */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/finansx-logo.png"
            alt="Finansx Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <h1 className="text-2xl font-bold text-white">FinansX</h1>
        </div>
        <div>
          <a
            href="https://apps.apple.com/us/app/finansx-g%C3%BCncel-d%C3%B6viz-alt%C4%B1n/id6742147857"
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center"
          >
            <Download className="mr-2" /> İndir
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10 relative">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-900/30 shadow-2xl">
              <div className="flex items-center mb-4 space-x-2">
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                <Star className="text-yellow-400 fill-yellow-400" size={24} />
                <span className="text-gray-300 ml-2">(5.0)</span>
              </div>
              <h2 className="text-[2.5rem] font-extrabold text-blue-200 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
                Finansal Gücünüzü Dijital Olarak Keşfedin
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Anlık döviz kurları, altın fiyatları ve kapsamlı finansal
                analizlerle yatırımlarınızı güçlendirin.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://apps.apple.com/us/app/finansx-g%C3%BCncel-d%C3%B6viz-alt%C4%B1n/id6742147857"
                  target="_blank"
                  className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition flex items-center space-x-2"
                >
                  <Image
                    src="/apple-logo.png"
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  <span>App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.katreo.finansx"
                  target="_blank"
                  className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition flex items-center space-x-2"
                >
                  <Image
                    src="/google-play-logo.png"
                    alt="Google Play"
                    width={24}
                    height={24}
                  />
                  <span>Google Play</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-2xl opacity-50"></div>
            <Image
              src="/app-mockup.png"
              alt="Finansx Uygulama Ekranı"
              width={450}
              height={300}
              className="relative mx-auto"
            />
          </div>
        </div>
      </header>

      {/* Features Section Enhanced */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center text-blue-300 mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
          Neden FinansX?
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:bg-gray-700 transition group">
            <div className="bg-blue-900/30 group-hover:bg-blue-900/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transition">
              <CreditCard
                className="text-blue-400 group-hover:scale-110 transition"
                size={40}
              />
            </div>
            <h4 className="font-bold text-xl mb-3 text-blue-300">
              Güncel Kurlar
            </h4>
            <p className="text-gray-400">
              Anlık döviz ve altın fiyatlarını gerçek zamanlı takip edin.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:bg-gray-700 transition group">
            <div className="bg-green-900/30 group-hover:bg-green-900/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transition">
              <TrendingUp
                className="text-green-400 group-hover:scale-110 transition"
                size={40}
              />
            </div>
            <h4 className="font-bold text-xl mb-3 text-blue-300">
              Finansal Analiz
            </h4>
            <p className="text-gray-400">
              Detaylı grafik ve raporlarla yatırım stratejilerinizi optimize
              edin.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:bg-gray-700 transition group">
            <div className="bg-purple-900/30 group-hover:bg-purple-900/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transition">
              <Shield
                className="text-purple-400 group-hover:scale-110 transition"
                size={40}
              />
            </div>
            <h4 className="font-bold text-xl mb-3 text-blue-300">
              Güvenli Kullanım
            </h4>
            <p className="text-gray-400">
              Gelişmiş güvenlik protokolleriyle kişisel verileriniz koruma
              altında.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:bg-gray-700 transition group">
            <div className="bg-orange-900/30 group-hover:bg-orange-900/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transition">
              <Download
                className="text-orange-400 group-hover:scale-110 transition"
                size={40}
              />
            </div>
            <h4 className="font-bold text-xl mb-3 text-blue-300">
              Kolay Erişim
            </h4>
            <p className="text-gray-400">
              Mobil cihazlarınızdan kesintisiz ve hızlı erişim.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center text-blue-300 mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
          FinansX ile Geleceğinizi Şekillendirin
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:bg-gray-700 transition group"
            >
              <div
                className={`${feature.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition group-hover:scale-110`}
              >
                <feature.icon
                  size={40}
                  className="group-hover:rotate-12 transition"
                />
              </div>
              <h4 className="font-bold text-2xl mb-4 text-blue-300 text-center">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-center mb-6">
                {feature.description}
              </p>
              <ul className="space-y-3 text-gray-300">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center space-x-3">
                    <Star className="text-blue-400 w-4 h-4" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 text-white">
              Finansal Gücünüzü Şimdi Keşfedin
            </h3>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              FinansX ile yatırımlarınızı daha akıllıca yönetin. Güncel veriler,
              detaylı analizler ve güvenli kullanım bir tık uzağınızda.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://apps.apple.com/us/app/finansx-g%C3%BCncel-d%C3%B6viz-alt%C4%B1n/id6742147857"
                target="_blank"
                className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center space-x-3 shadow-2xl"
              >
                <Image
                  src="/apple-logo.png"
                  alt="App Store"
                  width={24}
                  height={24}
                />
                <span>App Store'dan İndirin</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.katreo.finansx"
                target="_blank"
                className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center space-x-3 shadow-2xl"
              >
                <Image
                  src="/google-play-logo.png"
                  alt="Google Play"
                  width={24}
                  height={24}
                />
                <span>Google Play'den İndirin</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold text-blue-300 mb-4">FinansX</h4>
              <p className="text-gray-400">
                Finansal verilerinizi akıllıca yönetin, geleceğinizi
                şekillendirin.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-4">
                Hızlı Erişim
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ana Sayfa</li>
                <li>Özellikler</li>
                <li>Destek</li>
                <li>SSS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-4">
                Yasal
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gizlilik Politikası</li>
                <li>Kullanım Koşulları</li>
                <li>Çerez Politikası</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-4">
                İletişim
              </h4>
              <p className="text-gray-400">
                katreodigital@gmail.com
                <br />
                +90 (212) 123 45 67
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} FinansX. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
