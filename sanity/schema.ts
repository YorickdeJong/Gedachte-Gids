
import events from './schema/events'
import teams from './schema/teams'
import faqs from './schema/faqs'
import staff from './schema/staff'
import blog from './schema/blog'
import testimonials from './schema/testimonials'


export const schema: { types: any } = {
  types: [events,teams , faqs , staff , blog, testimonials],
}
