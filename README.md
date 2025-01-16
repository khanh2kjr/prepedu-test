## Front end architecture

```
App
|__ MainLayout
|  |__ MainHeader
|  |__ MainContainer
|     |__ EducationPath
|     |   |__ LessionOverviewMonthly
|     |   |  |__ ListLessonMonthlyItem
|     |   |  |  |__ LessonItem
|     |   |  |  |__ LessonItem
|     |   |  |  |__ LessonItem
|     |   |  |__ ListLessonMonthlyItem
|     |   |  |  |__ LessonItem
|     |   |  |  |__ LessonItem
|     |   |  |  |__ LessonItem
|     |   |__ RightSideBar (LearningProgressions, CandidateInfo)
|     |
|     |__ Other features...
|     |__ Other features...
|
|__ Other layouts...
|__ Other layouts...
```

The app component can contain multiple layouts, such as the login layout, admin layout, user layout, etc.
We will add many features to the layout components, including the feature to display the lessons, like the EducationPath above.
