export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      title: "Review",
      name: "review",
      type: "text"
    },
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Designation",
      name: "designation",
      type: "string"
    },
    {
      title: "Star",
      name: "star",
      type: "number",
      validation: Rule => Rule.required().min(1).max(5)
    }
  ]
}