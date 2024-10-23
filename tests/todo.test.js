// Import Playwright test functions
const { test, expect } = require('@playwright/test');

test.describe('To-Do List App', () => {
  // Test for loading the page
  test('should load the page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle('To-Do List'); // Assuming the page has this title
  });

  // Test for adding a task
  test('should add a new task to the list', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Type in the new task input field
    await page.fill('input[placeholder="Add a new task"]', 'Test Playwright Task');

    // Click the Add button
    await page.click('button[type="submit"]');

    // Verify the task is added
    await expect(page.locator('li')).toContainText('Test Playwright Task');
  });

  // Test for marking a task as completed
  test('should mark a task as completed', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Add a task
    await page.fill('input[placeholder="Add a new task"]', 'Complete task');
    await page.click('button[type="submit"]');

    // Mark it as complete
    await page.click('li >> text=Complete task >> input[type="checkbox"]');

    // Verify the task is marked as completed
    const task = page.locator('li >> text=Complete task');
    await expect(task).toHaveClass(/completed/); // Assuming a class "completed" marks completed tasks
  });

  // Test for deleting a task
  test('should delete a task', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Add a task
    await page.fill('input[placeholder="Add a new task"]', 'Delete task');
    await page.click('button[type="submit"]');

    // Delete the task
    await page.click('li >> text=Delete task >> button[aria-label="Delete"]');

    // Verify the task is deleted
    await expect(page.locator('li')).not.toContainText('Delete task');
  });
});
