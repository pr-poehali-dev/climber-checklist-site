import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="mb-8">
          <Icon name="Mountain" size={80} className="text-teal-400 mb-6" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
          <span className="bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
            Чек-лист
          </span>
          <br />
          <span className="text-red-400">Скалолаза</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl leading-relaxed">
          Систематизируй свою подготовку к восхождению. Концентрация, дыхание,
          преодоление страхов — всё в одном месте.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Получить чек-лист
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-4 text-lg"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Посмотреть пример
          </Button>
        </div>

        <div className="flex items-center gap-8 text-slate-300">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={20} />
            <span>5000+ скалолазов</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Star" size={20} className="text-yellow-400" />
            <span>4.9 рейтинг</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="CheckCircle" size={20} className="text-green-400" />
            <span>Проверено профи</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
