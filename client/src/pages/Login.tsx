import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#081a35] via-[#0c1033] to-[#251b5a] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl shadow-lg w-[90%] max-w-md border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Noesis</h1>
          <p className="text-sm text-white/70">A Arte de Compreender</p>
        </div>

        {/* Subtítulo */}
        <h2 className="text-2xl font-semibold mb-2 text-white">Fazer Login</h2>
        <p className="text-sm text-white/60 mb-6">
          Bem-vindo de volta! Continue sua jornada de aprendizado inteligente
        </p>

        {/* Formulário */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full p-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                className="w-full p-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-white/50 hover:text-white/80"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-lg" />
                ) : (
                  <FaEye className="text-lg" />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm text-white/70">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-white/30 bg-transparent"
              />
              <label htmlFor="remember">Lembrar de mim</label>
            </div>
            <a href="#" className="text-indigo-400 hover:underline">
              Esqueceu a senha?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition"
          >
            Entrar
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-white/10"></div>
          <span className="text-sm text-white/50 px-3">ou continue com</span>
          <div className="flex-grow h-px bg-white/10"></div>
        </div>

        {/* Botões sociais */}
        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <FaGoogle className="text-white text-lg" />
            Google
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <FaGithub className="text-white text-lg" />
            GitHub
          </motion.button>
        </div>

        {/* Link para criar conta */}
        <p className="text-center text-sm text-white/70 mt-6">
          Não possui uma conta?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Criar Conta
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}
