# Tailwind CSS Hover Effect Issue

This repository demonstrates a common issue encountered when using Tailwind CSS hover effects.  The hover effect on a button element unexpectedly fails to function properly when the button is nested within a container that also has a background color applied.  This problem is related to the specificity of CSS selectors and how Tailwind CSS handles class inheritance.

## Problem

The button's hover effect (`hover:bg-blue-700`) is overridden by the background color of the parent container (`bg-gray-100`). This is because the parent's `bg-gray-100` style has a higher specificity than the button's `hover:bg-blue-700` style.

## Solution

The solution involves overriding the parent's background color specificity using the `!important` flag or by ensuring that the button's hover style has a higher specificity.