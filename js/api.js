const URL_BASE = "http://localhost:3000"

const api = {
    async buscarPensamentos() {
        try {
            //const response = await fetch(`${URL_BASE}/pensamentos`)
            //return await response.json()
            
            const response = await axios.get(`${URL_BASE}/pensamentos`)
            return await response.data
        } catch {
            alert('Erro ao buscar pensamentos')
            throw error;            
        }
    },
    async salvarPensamentos(pensamento) {
        try {
            const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento) 
            //const response = await fetch(`${URL_BASE}/pensamentos`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(pensamento)
            // })
            //return await response.json()
            return await response.data
        } catch {
            alert('Erro ao salvar pensamentos')
            throw error;            
        }
    },
    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
            // const response = await fetch(`${URL_BASE}/pensamentos/${id}`)
            // return await response.json()
            return await response.data
        } catch {
            alert('Erro ao buscar pensamento')
            throw error;            
        }
    },
    async editarPensamentos(pensamento) {
        try {
            const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
            // const response = await fetch(`${URL_BASE}/pensamentos${pensamento.id}`, {
            //     method: "PUT",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(pensamento)
            // })
            // return await response.json()
            return await response.data
        } catch {
            alert('Erro ao editar pensamento')
            throw error;            
        }
    },
    async excluirPensamentos(id) {
        try {
            const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`)
            // const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
            //     method: "DELETE",                
            // })
            
        } catch {
            alert('Erro ao excluir pensamento')
            throw error;            
        }
    }, 
    async buscarPensamentoPorTermo(termo){
        try {
            const pensamentos = await this.buscarPensamentos()
            const termoEmMinusculo = termo.toLowerCase()
            
            const pensamentosFiltrados = pensamentos.filter(pensamento => {
                return (pensamento.conteudo.toLowerCase().includes(termoEmMinusculo) || 
                pensamento.autoria.toLowerCase().includes(termoEmMinusculo))
            })
            return pensamentosFiltrados
            
        } catch (error) {
            alert("Erro ao filtrar pensamentos")
            throw error
        }
        
    }   
}

export default api;