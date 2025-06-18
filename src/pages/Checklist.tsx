import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Checklist = () => {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const checklistItems = [
    {
      category: "Разминка",
      items: [
        "Проверить снаряжение перед выходом",
        "Разогреть суставы и мышцы (10-15 мин)",
        "Сделать пробные движения на простых зацепах",
      ],
    },
    {
      category: "Техника лазания",
      items: [
        "Держать центр тяжести близко к стене",
        "Использовать ноги для толчка, а не руки для подтягивания",
        "Планировать маршрут перед началом",
      ],
    },
    {
      category: "Безопасность",
      items: [
        "Проверить узлы и карабины",
        "Убедиться в надёжности страховки",
        "Иметь запасной план спуска",
      ],
    },
    {
      category: "После тренировки",
      items: [
        "Растяжка (15-20 мин)",
        "Записать прогресс в дневник",
        "Проанализировать ошибки и успехи",
      ],
    },
  ];

  // Загрузка состояния из localStorage
  useEffect(() => {
    const saved = localStorage.getItem("climbing-checklist");
    if (saved) {
      setCheckedItems(new Set(JSON.parse(saved)));
    }
  }, []);

  // Сохранение состояния в localStorage
  useEffect(() => {
    localStorage.setItem(
      "climbing-checklist",
      JSON.stringify([...checkedItems]),
    );
  }, [checkedItems]);

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const itemId = `${categoryIndex}-${itemIndex}`;
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const getTotalItems = () => {
    return checklistItems.reduce(
      (sum, section) => sum + section.items.length,
      0,
    );
  };

  const getCompletedItems = () => {
    return checkedItems.size;
  };

  const getProgress = () => {
    return Math.round((getCompletedItems() / getTotalItems()) * 100);
  };

  const resetChecklist = () => {
    setCheckedItems(new Set());
  };

  const downloadPDF = () => {
    // Здесь будет логика скачивания PDF
    alert("PDF скачивается... (функция в разработке)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name="Mountain" size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-montserrat">
            Чек-лист скалолаза
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Твой путеводитель к системному подходу в скалолазании
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800">Прогресс</h3>
              <span className="text-2xl font-bold text-red-500">
                {getProgress()}%
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${getProgress()}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-slate-600">
              <span>
                {getCompletedItems()} из {getTotalItems()} выполнено
              </span>
              <Button
                onClick={resetChecklist}
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-red-500"
              >
                <Icon name="RotateCcw" size={16} className="mr-1" />
                Сбросить
              </Button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={downloadPDF}
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            <Icon name="Download" size={20} className="mr-2" />
            Скачать PDF
          </Button>
          <Button
            onClick={resetChecklist}
            size="lg"
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-50"
          >
            <Icon name="RotateCcw" size={20} className="mr-2" />
            Сбросить
          </Button>
          <Button onClick={() => navigate("/")} variant="outline" size="lg">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            На главную
          </Button>
        </div>

        {/* Checklist */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {checklistItems.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => {
                    const itemId = `${index}-${itemIndex}`;
                    const isChecked = checkedItems.has(itemId);
                    return (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-3 cursor-pointer group"
                        onClick={() => toggleItem(index, itemIndex)}
                      >
                        <div
                          className={`
                          w-6 h-6 border-2 rounded flex-shrink-0 mt-0.5 flex items-center justify-center transition-all duration-200
                          ${
                            isChecked
                              ? "bg-red-500 border-red-500"
                              : "border-slate-300 group-hover:border-red-400"
                          }
                        `}
                        >
                          {isChecked && (
                            <Icon
                              name="Check"
                              size={16}
                              className="text-white"
                            />
                          )}
                        </div>
                        <p
                          className={`
                          leading-relaxed transition-all duration-200
                          ${
                            isChecked
                              ? "text-slate-500 line-through"
                              : "text-slate-700 group-hover:text-slate-900"
                          }
                        `}
                        >
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto">
          <Icon name="Heart" size={24} className="text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Удачных тренировок!
          </h3>
          <p className="text-slate-600">
            Используй этот чек-лист на каждой тренировке для достижения лучших
            результатов
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
