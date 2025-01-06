import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const App: React.FC = () => {
  const { toast } = useToast();

  return (
    <>
      <div className="bg-blue-400 h-full flex pt-8 items-center gap-2 flex-col">
        <span className="text-white font-bold text-2xl">HOMEPAGE</span>
        <div className="flex gap-3">
          <Button
            onClick={() => {
              toast({
                title: 'Scheduled: Catch up',
                description: 'Friday, February 10, 2023 at 5:57 PM',
              });
            }}
          >
            Show toast
          </Button>
        </div>
      </div>
    </>
  );
};

export default App;
