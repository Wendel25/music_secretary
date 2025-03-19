import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageSquare, ChevronDown } from "lucide-react";

export function SupportView() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="">
      <div className="min-h-[300px] w-full flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full shadow-md border-t-4 border-t-color_logo">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3"
                >
                  <path
                    d="M21 7.5L12 2L3 7.5M21 7.5L12 13M21 7.5V16.5L12 22M12 13L3 7.5M12 13V22M3 7.5V16.5L12 22"
                    stroke="#0284c7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2 className="text-2xl font-bold">
                  Desenvolvido por <span className="text-sky-500">Bird</span>
                  <span className="text-sky-600">.Tech</span>
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Expandir informações"
              >
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                </motion.div>
              </Button>
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-slate-600 mb-6 leading-relaxed">
                Agradecemos por confiar em nossos serviços para o desenvolvimento deste projeto. Caso precise de suporte
                ou tenha qualquer dúvida, nossa equipe está à disposição para atendê-lo.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className={`text-slate-600 ${isExpanded ? "hidden" : "block"} sm:text-sm`}>
                Precisa de ajuda? Entre em contato conosco.
              </p>

              <Button
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 gap-2"
                onClick={() => window.open("https://wa.me/5518981091295", "_blank")}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Contato via WhatsApp</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
          <div className="bg-slate-50 px-8 py-3 text-center sm:text-right border-t border-slate-100">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Bird.Tech. Todos os direitos reservados.
            </p>
          </div>
        </Card>
      </div>

      <div className="fixed bottom-4 right-4">
        <img src="/logo-birdtech.png" alt="imagem logo bird tech" width={150} />
      </div>
    </div>
  );
}
