import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", { name, email });
    // Переход на страницу чек-листа
    navigate("/checklist");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjAgMjBjMCAxMS4wNDYtOC45NTQgMjAtMjAgMjB2MjBoNDBWMjBIMjB6Ii8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="mb-8">
              <Icon name="Mountain" size={60} className="text-teal-400 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                Получи чек-лист
                <span className="block text-red-400">прямо сейчас</span>
              </h2>
              <p className="text-xl text-slate-200 leading-relaxed">
                Начни применять системный подход уже на следующей тренировке
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <Icon name="Check" size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Мгновенная доставка</h4>
                  <p className="text-slate-300">
                    Получишь PDF на почту через 2 минуты
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <Icon name="Smartphone" size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Мобильная версия</h4>
                  <p className="text-slate-300">
                    Удобно использовать прямо на скалах
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                  <Icon name="RefreshCw" size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Бесплатные обновления
                  </h4>
                  <p className="text-slate-300">
                    Новые техники и улучшения без доплат
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Download" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 font-montserrat">
                Скачать чек-лист
              </h3>
              <p className="text-slate-600 mt-2">
                Заполни форму и получи материалы на почту
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Как тебя зовут?
                </label>
                <Input
                  type="text"
                  placeholder="Твоё имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email для получения чек-листа
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-lg"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-red-500 hover:bg-red-600 text-white h-14 text-lg font-semibold"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Получить чек-лист бесплатно
              </Button>
            </form>

            <p className="text-sm text-slate-500 text-center mt-4">
              Нажимая кнопку, ты соглашаешься с обработкой персональных данных
            </p>

            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-600">
                <Icon name="Users" size={16} />
                <span className="text-sm">5000+ скачиваний</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Icon name="Star" size={16} className="text-yellow-500" />
                <span className="text-sm">4.9 рейтинг</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Order;
