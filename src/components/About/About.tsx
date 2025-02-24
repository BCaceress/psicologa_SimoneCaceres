import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row w-full h-screen bg-white">
      {/* Coluna da imagem */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src="/images/simone.png"
          alt="Foto da Psicóloga Simone Caceres"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Coluna de texto com padding lateral aumentado */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-12 md:px-32 py-12 text-gray-700">
        {/* Nome em destaque (duas linhas) */}
        <h1 className="font-brutel text-gray-900 text-center md:text-left leading-none mb-2">
          <span className="block text-7xl md:text-8xl">Simone</span>
          <span className="block text-7xl md:text-8xl">Caceres</span>
        </h1>

        {/* Linha horizontal e texto lado a lado */}
        <div className="flex items-center mb-8">
          {/* Linha horizontal com a cor da borda #A3B8B4 */}
          <span className="block w-20 border-t-2 border-[#A3B8B4]"></span>
          {/* Texto começando imediatamente após a linha */}
          <span className="ml-2 text-xl md:text-2xl font-futura-round text-gray-700">
            Psicóloga - CRP 07/31309
          </span>
        </div>

        {/* Parágrafos de texto */}
        <div className="space-y-6 text-justify md:text-left">
          <p className="text-lg md:text-xl leading-relaxed font-futura-round">
            Olá! Meu nome é Simone Caceres Soares, sou Psicóloga Clínica desde
            2019 e futura Psicanalista. Desde 2022 faço a Formação em Psicanálise,
            e estudo os traumas infantis e seus impactos. Atendo presencial e online
            no Rio Grande do Sul.
          </p>

          <p className="text-lg md:text-xl leading-relaxed font-futura-round">
            Fui capturada pela psicanálise antes mesmo de terminar a graduação,
            quando tive o prazer de conhecer um pouquinho sobre FREUD, o pai da
            psicanálise e suas teorias. Naquele momento, estudar como o
            inconsciente se expressa e revela aspectos ocultos da nossa psique
            se tornou um desafio apaixonante.
          </p>

          <p className="text-lg md:text-xl leading-relaxed font-futura-round">
            Hoje dedico meu tempo ao estudo, aprimorando meus conhecimentos e
            trabalhando com ética, dentro do tripé psicanalítico (teoria, análise
            e supervisão).
          </p>

          <p className="text-lg md:text-xl leading-relaxed font-futura-round">
            Sou apaixonada pela minha profissão e ao meu trabalho. O meu objetivo é 
            dar o meu melhor, proporcionando uma escuta ativa, acolhedora, ofertando 
            a você um tratamento psicológico eficaz, à sua demanda e disponibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
