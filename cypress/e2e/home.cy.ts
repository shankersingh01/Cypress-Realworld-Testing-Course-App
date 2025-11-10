import HomePage from '../support/pages/HomePage';


describe('home page', () => {
  beforeEach( () => {
    HomePage.visit()
  })

  context("Hero Section", () => {
    it('the h1 contains the correct text', () => {
      HomePage.expectHeroHeadingText("Testing Next.js Applications with Cypress")
    }),

    it('the features on the homepage are correct', () => {
      // cy.get("dt").eq(0).contains(/4 courses/i) regex way
      HomePage.expectFeatureText(0, "4 Courses")
      HomePage.expectFeatureText(1, "25+ Lessons")
      HomePage.expectFeatureText(2, "Free and Open Source")
      // cy.get("dt").eq(1).contains("25+ Lessons")
      // cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      HomePage.openCourse(0).assertPath("/testing-your-first-application")
      // cy.getByData('course-0').find("a").contains("Get started").click()
      // cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    it("Course: Testing Foundations", () => {
      HomePage.openCourse(1).assertPath("/testing-foundations")
      // cy.getByData('course-1').find("a").contains("Get started").click()
      // cy.location("pathname").should("equal", "/testing-foundations")
    })

    it("Cypress Fundamentals", () => {
      HomePage.openCourse(2).assertPath("/cypress-fundamentals")
      // cy.getByData('course-2').find("a").contains("Get started").click()
      // cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})