import { defineStore } from 'pinia'
import axios from 'axios'

export const useCatFactsStore = defineStore('catFacts', {
    state: () => ({
        facts: [],
        currentFact: 'Click the button to get a cat fact!',
    }),
    actions: {
        async fetchCatFact() {
            if (this.facts.length === 0) {
                const response = await axios.get('https://meowfacts.herokuapp.com/')
                this.facts = response.data.data
            }
            this.currentFact = this.facts.shift()
        },
    },
})
