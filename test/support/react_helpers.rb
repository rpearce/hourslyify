module ReactHelpers
  def trigger_react_click(selector)
    page.execute_script %{
      var node = document.querySelector("#{selector}");
      React.addons.TestUtils.Simulate.click(node);
    }
  end
end
