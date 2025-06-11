import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState<string[]>([])
  const [newText, setNewText] = useState("")

  const sendData = () => {
    if (!newText.trim()) return
    setMessages((prev) => [...prev, newText])
    setNewText("")
  }

  useEffect(() => {
    // Poderia carregar de localStorage se quiser persistência
  }, [])

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Mensagens</h1>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
      <input
        value={newText}
        onChange={e => setNewText(e.target.value)}
        placeholder="Digite sua mensagem"
      />
      <button onClick={sendData} style={{ marginLeft: "10px" }}>Enviar</button>
    </div>
  )
}

export default App
