require 'test_helper'

class ItWorksTest < ActionDispatch::IntegrationTest
  def setup
    visit '/'
  end

  test 'the page loads' do
    assert page.has_selector?('[data-js="tasks-index"]')
    assert page.has_content?('Loading...')
  end

  test 'creating a new task' do
    name = Faker::Name.name
    current_rate = Faker::Number.number(1)
    start = DateTime.now
    stop = DateTime.now + 2.hours

    js do
      fill_in 'Name'          , with: name
      fill_in 'Current Rate'  , with: current_rate
      fill_in 'Start DateTime', with: start
      fill_in 'Stop DateTime' , with: stop
      click_on 'Submit'
      #trigger_react_click('button')

      within 'table' do
        assert page.has_content?(name)
        assert page.has_content?(current_rate)
        assert page.has_content?(start.strftime('%D %r'))
        assert page.has_content?(stop.strftime('%D %r'))
      end
    end
  end
end
