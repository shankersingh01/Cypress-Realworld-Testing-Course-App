class HomePage {
    visit() {
        cy.visit("/")
        return this
    }

    getHeroHeading() {
        return cy.getByData("hero-heading");
    }

    expectHeroHeadingText(text: string) {
        this.getHeroHeading().should("contain", text);
        return this
    }

    getFeature(index: number) {
        return cy.get('dt').eq(index) // consider replacing with data-cy selectors
    }

    expectFeatureText(index: number, text: string) {
        this.getFeature(index).should('contain', text)
        return this
    }

    openCourse(index: number) {
        cy.getByData(`course-${index}`).find('a').contains('Get started').click()
        return this
    }

    assertPath(path: string) {
        cy.location('pathname').should('equal', path)
        return this
    }

}

const homePage = new HomePage();
export default homePage;