import { mount } from "cypress/vue";
import unitable from "../../src/components/UniTable.vue";
describe("unitable", () => {
  it("check unitable", () => {
    mount(unitable, {
      props: {
        cols: [
          {
            title: "Name",
            key: "name",
            sortable: true,
            component: { type: "label", color: "red" },
          },
          {
            title: "Status",
            key: "status",
            component: {
              type: "select",
              options: ["Active", "inActive", "Pending"],
            },
          },
          {
            title: "Email",
            key: "email",
            component: {
              tag: "input",
              type: "email",
              disabled: false,
            },
          },
          {
            title: "is Admin",
            key: "isAdmin",
            component: { tag: "input", type: "checkbox", disabled: true },
          },
          {
            title: "new column",
            key: "newCol",
            component: { tag: "input", type: "checkbox" },
          },
        ],
        rows: [
          {
            name: {
              key: "name",
              value: "Alex",
            },
            status: {
              key: "status",
              value: "Active",
            },
            email: {
              key: "email",
              value: "alex@gmail.com",
            },
            isAdmin: {
              key: "isAdmin",
              value: false,
            },
            newCol: {
              value: true,
            },
          },
          {
            name: {
              key: "name",
              value: "Andrew",
            },
            status: {
              key: "status",
              value: "Active",
            },
            email: {
              key: "email",
              value: "andrew@gmail.com",
            },
            isAdmin: {
              key: "isAdmin",
              value: true,
            },
            newCol: {
              value: false,
            },
          },
        ],
      },
    });
    cy.wait(2000);
    cy.get('tbody tr:first-child input[type="email"]')
      .should("have.value", "alex@gmail.com")
      .type("hello");
    cy.get("tbody tr:first-child .cell-isAdmin input").should("not.be.checked");
    cy.get("tbody tr:first-child .cell-newCol input")
      .should("not.be.disabled")
      .click();
    cy.get("tbody tr:last-child .cell-status select").select("Pending");
  });
});
