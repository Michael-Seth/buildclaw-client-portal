import DefaultLayout from '@/components/DashboardLayout';
import TextContent from '@/components/TextContent';
import React from 'react'

const Timeline = () => {
    return (
        <DefaultLayout>
          <TextContent title="Project Timeline" active />
        </DefaultLayout>
      );
}

export default Timeline