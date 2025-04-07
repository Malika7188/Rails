module ApplicationHelper
    def react_map(locations)
      content_tag(:div, '', 
        data: {
          react_component: "map",
          locations: locations.to_json
        }
      )
    end
  end