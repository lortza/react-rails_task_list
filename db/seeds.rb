Task.destroy_all

Task.create!([
  {title: "Make bed", complete: true, priority: false},
  {title: "Move the car", complete: false, priority: true},
  {title: "Build React version of Task list", complete: false, priority: false},
  {title: "Set up automatic deploys", complete: false, priority: false}
])
