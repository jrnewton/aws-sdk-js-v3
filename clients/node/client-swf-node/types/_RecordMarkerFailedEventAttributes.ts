/**
 * <p>Provides the details of the <code>RecordMarkerFailed</code> event.</p>
 */
export interface _RecordMarkerFailedEventAttributes {
  /**
   * <p>The marker's name.</p>
   */
  markerName: string;

  /**
   * <p>The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>
   */
  cause: "OPERATION_NOT_PERMITTED" | string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>RecordMarkerFailed</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;
}

export type _UnmarshalledRecordMarkerFailedEventAttributes = _RecordMarkerFailedEventAttributes;