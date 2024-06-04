import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import CatFactComponent from '@/components/CatFact.vue'
import { useCatFactsStore } from '@/store/catFacts'

// Mock do axios para retornar dados de teste
vi.mock('axios', () => ({
    default: {
        get: vi.fn(() => Promise.resolve({ data: { data: ['Test Cat Fact 1', 'Test Cat Fact 2'] } }))
    }
}))

describe('CatFactComponent', () => {
    it('renders correctly with initial data', () => {
        const wrapper = mount(CatFactComponent, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vi.fn,
                    stubActions: false,
                    initialState: {
                        catFacts: { currentFact: 'Initial Cat Fact', facts: [] }
                    }
                })]
            }
        })

        expect(wrapper.text()).toContain('CAT FACT:')
        expect(wrapper.text()).toContain('Initial Cat Fact')
    })

    it('fetches and displays a new cat fact when the button is clicked', async () => {
        const wrapper = mount(CatFactComponent, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vi.fn,
                    stubActions: false,
                    initialState: {
                        catFacts: { currentFact: 'Initial Cat Fact', facts: [] }
                    }
                })]
            }
        })

        const store = useCatFactsStore()

        // Mock the fetchCatFact action
        const fetchCatFactMock = vi.fn(async () => {
            store.currentFact = 'New Cat Fact'
        })
        store.fetchCatFact = fetchCatFactMock
        expect(store.fetchCatFact).toBe(fetchCatFactMock)

        // Simulate the button click
        await wrapper.find('button').trigger('click')

        // Wait for the timeout and next tick to ensure the state is updated
        await new Promise(resolve => setTimeout(resolve, 300))
        await wrapper.vm.$nextTick()

        // Verify the mock action was called
        expect(store.fetchCatFact).toHaveBeenCalled()

        // Verify the new fact is displayed
        expect(wrapper.text()).toContain('New Cat Fact')
    })
})
