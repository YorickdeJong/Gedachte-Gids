export default {
     name: "events",
     title: "Workshops & Events",
     type: "document",
     fields: [
       {
         title: "Name",
         name: "name",
         type: "string"
       },
       {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'question',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
       {
        title: "Feature Image",
        name: "featureImage",
        type: "image"
      },
       {
         title: "Date",
         name: "date",
         type: "date"
       },
       {
         title: "Subscribers",
         name: "subscribers",
         type: "string"
       },
       {
         title: "Link",
         name: "link",
         type: "url"
       }
     ]
   }