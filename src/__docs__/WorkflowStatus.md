###### Status

Accepts `declined`, `draft`, `pending`, `active`

```jsx
import WorkflowStatus from '../WorkflowStatus/WorkflowStatus';
<div>
  <WorkflowStatus status="declined" label="Proposal Status" />
  <WorkflowStatus status="draft" label="Proposal Status" />
  <WorkflowStatus status="pending" label="Proposal Status" />
  <WorkflowStatus status="accepted" label="Proposal Status" />
</div>;
```

###### Custom Label

Labels can be explicitly set. Please remember to use a `t('translation.string')` when rendering the
label with this property.

```jsx
import WorkflowStatus from '../WorkflowStatusd/WorkflowStatus';
<div>
  <WorkflowStatus status="draft" label="Custom Label" />
</div>;
```
