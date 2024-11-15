import { Comments } from './comments.model';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

describe('CommentsService', () => {
  let service: CommentsService;
  let model: typeof Comments;

  beforeEach(async () => {
    model = {
      create: jest.fn(),
      findAll: jest.fn(),
    } as unknown as typeof Comments;

    service = new CommentsService(model);
  });

  it('should create a comment', async () => {
    const dto: CreateCommentDto = {
      content: 'Teste de comentário',
      taskId: 1,
      userId: 2,
    };

    await service.create(dto);

    expect(model.create).toHaveBeenCalledWith(dto);
  });

  it('should find comments by task', async () => {
    const taskId = 1;

    await service.findAllByTask(taskId);

    expect(model.findAll).toHaveBeenCalledWith({
      where: { taskId },
      include: [{ all: true }],
    });
  });
});
